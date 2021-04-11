
export const GET = async (endpoint) => {
    const baseUrl = 'https://api.github.com/'
    const res = await fetch(`${baseUrl}${endpoint}`);
    const data = await res.json();
    return data;
}

// `/repos/{owner}/{repo}/commits`