function Delete() {
    return (
        <div>
            <input type="text"></input>
            <button>Delete</button>
        </div>
    );
}

function Controls() {
    return (
        <div>
            <Delete />
            <div>
                <button>Sort by Group</button>
                <button>Sort by ID</button>
                <button>Grid / List</button>
            </div>
        </div>
    );
}

export default Controls;