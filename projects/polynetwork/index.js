const utils = require('../helper/utils');

async function eth() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLEthereum')
    return Number(tvl.data);
}

async function ontology() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLOntology')
    return Number(tvl.data);
}

async function neo() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLNeo')
    return Number(tvl.data);
}

async function carbon() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLCarbon')
    return Number(tvl.data);
}

async function bsc() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLBNBChain')
    return Number(tvl.data);
}

async function heco() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLHeco')
    return Number(tvl.data);
}

async function okc() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLOKC')
    return Number(tvl.data);
}

async function neo3() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLNeo3')
    return Number(tvl.data);
}

async function polygon() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLPolygon')
    return Number(tvl.data);
}

async function palette() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLPalette')
    return Number(tvl.data);
}

async function arbitrum() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLArbitrum')
    return Number(tvl.data);
}

async function gnosisChain() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLGnosisChain')
    return Number(tvl.data);
}

async function zilliqa() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLZilliqa')
    return Number(tvl.data);
}

async function avax() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLAvalanche')
    return Number(tvl.data);
}

async function fantom() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLFantom')
    return Number(tvl.data);
}

async function optimism() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLOptimistic')
    return Number(tvl.data);
}

async function andromeda() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLAndromeda')
    return Number(tvl.data);
}

async function boba() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLBoba')
    return Number(tvl.data);
}

async function oasis() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLOasis')
    return Number(tvl.data);
}

async function harmony() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLHarmony')
    return Number(tvl.data);
}

async function hsc() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLHSC')
    return Number(tvl.data);
}

async function bytomSideChain() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLBytomSidechain')
    return Number(tvl.data);
}

async function kcc() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLKCC')
    return Number(tvl.data);
}

async function fetch() {
    const tvl = await utils.fetchURL('https://explorer.poly.network/api/v1/getTVLTotal')
    return Number(tvl.data);
}


module.exports = {
    timetravel: false,
    misrepresentedTokens: true,
    ethereum: {
        fetch: eth
    },
    ontology: {
        fetch: ontology
    },
    neo: {
        fetch: neo
    },
    carbon: {
        fetch: carbon
    },
    bsc: {
        fetch: bsc
    },
    heco: {
        fetch: heco
    },
    okexchain: {
        fetch: okc
    },
    neo3: {
        fetch: neo3
    },
    polygon: {
        fetch: polygon
    },
    palette: {
        fetch: palette
    },
    arbitrum: {
        fetch: arbitrum
    },
    xdai: {
        fetch: gnosisChain
    },
    zilliqa: {
        fetch: zilliqa
    },
    avax: {
        fetch: avax
    },
    fantom: {
        fetch: fantom
    },
    optimism: {
        fetch: optimism
    },
    metis: {
        fetch: andromeda
    },
    boba: {
        fetch: boba
    },
    oasis: {
        fetch: oasis
    },
    harmony: {
        fetch: harmony
    },
    hoo: {
        fetch: hsc
    },
    bytomsidechain: {
        fetch: bytomSideChain
    },
    kcc: {
        fetch: kcc
    },
    fetch
}