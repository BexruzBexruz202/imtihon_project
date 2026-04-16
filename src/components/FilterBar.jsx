import React from "react"
import "../styles/FilterBar.css"

const FilterBar = () => {
    return (
        <div className="filter-bar">
            <select className="filter-select">
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    )
}

export default FilterBar;