const report = (state = [], action) => {

    let newState = [...state];

    switch (String(action.type).toUpperCase().trim()) {
        case 'ADD':
            newState = [...state, action.newItem];
            break;
        case 'CLEAR':
			if(newState.length > 0) {
		        let delstring = prompt("Enter the number of the contact to delete\n(enter '0' to clear all):\n\n");
			    if (delstring.trim() !== "") {
    			    let deletion = Math.floor(Number(delstring.trim()));
					if(!isNaN(deletion)) {
			            if (deletion === 0) {
				            newState = [];
			            } else if (deletion >= 1 && deletion <= newState.length) {
			                newState.splice(deletion-1, 1);
						}
			        }
				}
			}
            break;
		default:
		    break;   // default returns current state because of "let newState = state"
    }

    return newState;
};

export default report;