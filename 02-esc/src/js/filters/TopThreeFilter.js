export default class TopThreeFilter extends EventTarget {
    filter(challenges) {
        return challenges
            .sort((first, second) => second.rating - first.rating)
            .slice(0, 3);
    }
}