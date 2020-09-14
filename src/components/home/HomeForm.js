import React, { useContext, useState, useEffect } from "react"
import { FightContext } from "./fights/FightsProvider"


export const FightForm = (props) => {
    // Use the required context providers for data
    const { addFight, fights, updateFight, getFights } = useContext(FightContext)

    // Component state
    const [fight, setFight] = useState({})

    // Is there a a URL parameter??
    const editMode = props.match.params.hasOwnProperty("fightId")  // true or false

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newFight = Object.assign({}, fight)          // Create copy
        newFight[event.target.name] = event.target.value    // Modify copy
        setFight(newFight)                                 // Set copy as new state
    }

    /*
        If there is a URL parameter, then the user has chosen to
        edit an animal.
            1. Get the value of the URL parameter.
            2. Use that `id` to find the animal.
            3. Update component state variable.
    */
    const getFightInEditMode = () => {
        if (editMode) {
            const fightId = parseInt(props.match.params.fightId)
            const selectedFight = fights.find(f => f.id === fightId) || {}
            setFight(selectedFight)
        }
    }

    // Get animals from API when component initializes
    useEffect(() => {
        getFights()
    }, [])

    // Once provider state is updated, determine the animal (if edit)
    useEffect(() => {
        getFightInEditMode()
    }, [fights])



    return (
        <form className="homeForm">
            <h2 className="homeForm__title">Home Page</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Animal name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Animal name"
                        defaultValue={animal.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Animal breed: </label>
                    <input type="text" name="breed" required className="form-control"
                        placeholder="Animal breed"
                        defaultValue={animal.breed}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location: </label>
                    <select name="locationId" className="form-control"
                        value={animal.locationId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="treatment">Treatments: </label>
                    <textarea type="text" name="treatment" className="form-control"
                        value={animal.treatment}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Make Reservation"}
            </button>
        </form>
    )
}