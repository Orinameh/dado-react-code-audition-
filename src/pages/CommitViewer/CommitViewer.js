import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { GET } from '../../api';
import Search from '../../components/Search';
import './commit.scss';

const CommitViewer = () => {
    const { filter } = useParams();
    const [commits, setCommits] = useState([]);
    const [loading, setLoading] = useState(false);
    const { push } = useHistory();

    // destructure owner and repos from filter
    const [owner, repos] = filter.split('-');

    const fetchCommits = useCallback(async () => {
        setLoading(true);
        try {
            const res = await GET(`repos/${owner}/${repos}/commits`)
            setCommits(res);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setCommits([]);

        }
    }, [owner, repos])
    useEffect(() => {
        fetchCommits();
    }, [fetchCommits])

    if(loading) {
        return (
            <div className="commit">
                <div className="commit__header">
                    <h3 onClick={() => push("/")}>CommitViewer</h3>
                    <Search page="commit" value={`${owner}/${repos}`} />
                </div>
                <div className="commit__value">{owner}/{repos}</div>
                <div className="commit__loading">
                    <p>Loading...</p>
                </div>

            </div>
        )
    }

    return (
        <div className="commit">
            <div className="commit__header">
                <h3 onClick={() => push("/")}>CommitViewer</h3>
                <Search page="commit" value={`${owner}/${repos}`} />
            </div>
            <div className="commit__value">{owner}/{repos}</div>
            {
                commits.length > 0 ? commits.slice(0, 10).map(({author, commit}, i) => (
                    <div className="commit__items" key={i}>
                        <div className="commit__items-user">
                            <img src={author.avatar_url} alt="author" />
                            <h5>{commit.author.name}</h5>
                        </div>
                        <div className="commit__items-message">
                            {commit.message}
                        </div>
                        <div className="commit__items-time">
                            {new Date(commit.author.date).toLocaleTimeString('en-US') }  {new Date(commit.author.date).toLocaleDateString('en-US')}
                        </div>
                    </div>  

                ))
                :
                <div className="commit__loading">
                    <p>No commits available</p>
                </div>
            }


        </div>
    )
}
export default CommitViewer;