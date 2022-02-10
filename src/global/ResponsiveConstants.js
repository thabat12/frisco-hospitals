const aspects = {
    desktopL: '17/9',
    desktopS: '8/9',
    tabletS: '3/4',
    tabletL: '7/10',
    mobileS: '3/5',
    mobileL: '1/2'
}

export const AspectConstants = {
    'mobileS' : `(max-aspect-ratio: ${aspects.mobileS})`,
    'mobileL' : `(max-aspect-ratio: ${aspects.mobileL})`,
    'tabletS' : `(max-aspect-ratio: ${aspects.tabletS})`,
    'tabletL' : `(max-aspect-ratio: ${aspects.tabletL})`,
    'desktopS' : `(max-aspect-ratio: ${aspects.desktopS})`,
    'desktopL' : `(max-aspect-ratio: ${aspects.desktopL})`,
    'ultrawide': `(min-aspect-ratio: ${aspects.desktopL})`
}

