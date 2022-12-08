export default class TopThreeFilter {
    filter(challenges) {
        return challenges
            .sort((first, second) => second.rating - first.rating)
            .slice(0, 3);
    }
}