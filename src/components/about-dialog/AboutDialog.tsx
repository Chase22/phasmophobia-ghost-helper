import TextDialog from "../text-dialog/TextDialog";
import {ChangelogMarkdown} from "../changelog/ChangelogMarkdown";

interface AboutDialogProps {
    open: boolean,
    onClose: () => void
}

const AboutDialog: React.FC<AboutDialogProps> = ({open, onClose}) => {
    return (
        <TextDialog title={"About"} open={open} onClose={onClose}>
            <h2>Version: 1.1</h2>
            Created by <a href="https://www.reddit.com/u/Chase_22">u/Chase_22</a>

            <ChangelogMarkdown/>
        </TextDialog>
    )
}

export default AboutDialog;
