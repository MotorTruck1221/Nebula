import { motion, useAnimation } from "framer-motion";
import { IframeHeader } from "./IframeHeader";
import { Tab, TabUI } from "./tabs/Tab";
import { useState } from "preact/hooks";

export function Iframe(props: { url: string }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <IframeHeader url={props.url} onSidebarToggle={handleSidebarToggle} />
      <motion.div
        className="flex h-[calc(100%_-_4rem)] w-full select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="sidebar h-full"
          initial={{ x: -200, width: 0 }}
          animate={{
            x: sidebarOpen ? 0 : -200,
            width: sidebarOpen ? "20%" : 0
          }}
          exit={{ x: -200, width: 0 }}
          transition={{ duration: 0.5 }}
        >
            <TabUI>
                <Tab title="Tab 1" favicon="https://google.com/favicon.ico" key="1" />
                <Tab title="Tab 2" favicon="https://google.com/favicon.ico" key="2" />
                <Tab title="Tab 3" favicon="https://google.com/favicon.ico" key="3" />
                <Tab title="Tab 4" favicon="https://google.com/favicon.ico" key="4" />
                <Tab title="Tab 5" favicon="https://google.com/favicon.ico" key="5" />
            </TabUI>
        </motion.div>

        <motion.div
          className="h-full w-full select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            id="iframe"
            src={props.url}
            className="h-full w-full border-none bg-primary"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
