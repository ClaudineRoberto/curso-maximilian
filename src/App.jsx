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

  let tabContent = <p>Click on a tab to view the example</p>

  if (selectedTopic) {
    tabContent =
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

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} /> )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}onSelect={() => handleSelect('jsx')}>Jsx</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
