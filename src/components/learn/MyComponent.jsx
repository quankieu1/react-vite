import './style.css'

const MyComponent = () => {
    // const hoidanit = "hehe";
    // const hoidanit = 123;
    // const hoidanit = true;
    // const hoidanit = undefined;
    // const hoidanit = [1, 2, 3];
    const hoidanit = {
        name: "hoidanIT",
        age: 25
    }
    return (
        <>
            <div className="">{JSON.stringify(hoidanit)} & i and me hehe </div>
            <div>{console.log("ERIC")}</div>
            <div className="chile"
                style={{ borderRadius: "10px" }}
            >chile</div>
        </>

    );
}

export default MyComponent;