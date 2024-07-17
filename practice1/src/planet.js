export const Planet = (props) => {
return (
    <div>
        {props.isGas && <h1> {props.name} is gas planet </h1>}  
    </div>
);
};