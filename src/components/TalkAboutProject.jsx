import { Button } from "./ui/button";

function TalkAboutProject(props) {
  return (
    <Button variant="secondary" size="lg">
      {props.contactButton}
    </Button>
  );
}

export default TalkAboutProject;
