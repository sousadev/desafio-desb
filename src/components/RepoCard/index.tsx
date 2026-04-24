import { Link } from "react-router-dom";
import { MdStar } from "react-icons/md";

import type { Repo } from "../../types/repo.types";

const RepoCard = ({ repo, username }: { repo: Repo, username?: string | undefined }) => {

    return (
        <>
            {repo && username && (
                <Link to={`/repo/${username}/${repo.name}`} className="repo-card text-link-none">
                    <div className="repo-top">
                        <h4>{repo.name}</h4>
                        <div className="repo-stars">
                            <MdStar size={18} color="#FFD700" />
                            <span>{repo.stargazers_count ?? repo.stars_count ?? 0}</span>
                        </div>
                    </div>
                    {repo.description && <p className="repo-desc">{repo.description}</p>}
                    <div className="repo-bottom">
                        {repo.language && (
                            <span className="repo-lang">
                                <span className="lang-dot"></span>
                                {repo.language}
                            </span>
                        )}
                    </div>
                </Link>
            )}
        </>
    )
}

export default RepoCard;