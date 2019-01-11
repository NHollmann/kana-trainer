

class RandomUtil {
    static calculateWeights(list) {
        let weightTotal = 0;
        let distribution = [];

        for (let i = 0; i < list.length; i++) {
            weightTotal += list[i];
        }
        for (let i = 0; i < list.length; i++) {
            distribution.push(list[i] / weightTotal);
        }

        return distribution;
    }

    static getRandomIdByDistribution(distribution) {
        let key = 0;
        let selector = Math.random();
        while (selector > 0) {
            selector -= distribution[key];
            key++;
        }
        key--;

        return key;
    }

    static getRandomIdByWeights(list) {
        const distribution = RandomUtil.calculateWeights(list);
        return RandomUtil.getRandomIdByDistribution(distribution);
    }

    static getRandom(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
}

export default RandomUtil;
