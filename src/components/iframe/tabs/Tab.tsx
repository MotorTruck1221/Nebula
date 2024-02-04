import { MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Reorder } from "framer-motion";
import { useState } from "preact/hooks";
import './tab.css';
type TabProps = {
    title: string;
    favicon: string;
    key: string;
}
function TabUI(props: { children: any }) {
    const [children, setChildren] = useState(props.children);
    return (
        <div className="h-full w-full bg-primary text-text-color font-bold text-lg p-2 flex flex-col gap-2">
                <Reorder.Group className="w-full flex flex-col h-[89%] pb-2 border-b-2 border-navbar-text-color items-center gap-2 overflow-x-auto" id="tabContainer" axis="y" values={children.valueOf()} onReorder={values => setChildren(values)}>
                    {children.map(child => (
                        <Reorder.Item className="w-full" as="div" key={child.key} value={child}>
                            {child}
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            <div className="h-12 w-full bg-primary p-2">
                <div className="flex h-full flex-row justify-right items-center">
                    <div className="ml-auto cursor-pointer border-2 p-2 rounded-md border-navbar-text-color hover:bg-navbar-text-color hover:text-primary transition-all duration-300 ease-in-out">
                        <FaPlus />
                    </div>
                </div>
            </div>
        </div>
    );
}


function Tab(props: { title: string, favicon: string }) {
    return (
        <div className="w-full h-9 rounded-md cursor-pointer overflow-hidden bg-navbar-color active:bg-navbar-text-color p-2 transition-all duration-300 ease-in-out">
            <div className="flex h-full w-full flex-row items-center">
                <img src={props.favicon} className="h-6 w-6 rounded-md" />
                <p className="pl-2 w-5/6 whitespace-nowrap overflow-hidden text-ellipsis">{props.title}</p>
                <div className="ml-auto cursor-pointer">
                    <MdClose />
                </div>
            </div>
        </div>
    );
}

export { TabUI, Tab };
