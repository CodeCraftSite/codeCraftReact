import { Button } from "./ui/button";

function WatchProjectBtn(props) {
  return (
    <Button variant="secondary" size="lg">
      {props.projectsButton}
    </Button>
  );
}

export default WatchProjectBtn;
