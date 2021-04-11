import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';

const Search = ({page, value}) => {
    const [searchTerm, setSearchTerm] = useState(value || '');
    const { push } = useHistory();
    const {path} = useRouteMatch();
    
    const navigate = () => {
        // if in commit viewer page
        if(path.includes('commits')) {
            push(`${searchTerm.split('/').join('-')}`)
        } else {
            push(`commits/${searchTerm.split('/').join('-')}`)
        }
    }

    return (
        <div className={`${page}__search`}>
            <input 
                type="search" 
                value={searchTerm} 
                placeholder="E.g facebook/react" 
                onChange={e => setSearchTerm(e.target.value)}
            />
            <button disabled={!searchTerm.includes('/')} onClick={navigate}>See commits 🚀</button>
        </div>
    )
}

export default Search;