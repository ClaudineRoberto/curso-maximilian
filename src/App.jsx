import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import { CoreConcept } from "./components/CoreConcept";
import { Header } from "./components/Header/Header.jsx";
import { TabButton } from "./components/TabButton.jsx";
import { useState } from "react";

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>Jsx</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Click on a tab to view the example</p> :
            <div id="tab-content">
              <h3> {EXAMPLES[selectedTopic].title} </h3>
              <p> {EXAMPLES[selectedTopic].description} </p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          }
        </section>
      </main>
    </div>
  );
}

export default App;
