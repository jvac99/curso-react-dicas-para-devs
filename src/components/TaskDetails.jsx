import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="back-button-container">
        <Button onClick={() => navigate(-1)}>Voltar</Button>
      </div>
      <div className="tasks-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          velit quis similique? Vitae, aut consequatur?
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
