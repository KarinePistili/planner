import BoxContent from "../BoxContent";
import SideBar from "../SideBar";


export default function TemplateWithSideBar({ component }) {
    return (
        <main>
            <SideBar />
            <BoxContent component={component} />
        </main>
    );
}