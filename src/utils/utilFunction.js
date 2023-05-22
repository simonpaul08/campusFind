
// sort by created At
export const sortByCreatedAt = ({ posts }) => {
    const sortedArray = posts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    return sortedArray;
}