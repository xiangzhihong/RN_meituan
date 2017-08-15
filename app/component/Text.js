/**
 * https://github.com/facebook/react-native
 * @flow 字体样式封装
 */

import React from 'react';
import  { StyleSheet, Text ,ReactElement} from 'react-native';

export function HeadingBig({style, ...props}: Object): ReactElement {
    return <Text style={[styles.h40, style]} {...props} />
}

export function Text16({style, ...props}: Object): ReactElement {
    return <Text style={[styles.h16, style]} {...props} />
}

export function Text14({style, ...props}: Object): ReactElement {
    return <Text style={[styles.h14, style]} {...props} />
}

export function Text12({style, ...props}: Object): ReactElement {
    return <Text style={[styles.h12, style]} {...props} />
}

export function Paragraph({style, ...props}: Object): ReactElement {
    return <Text style={[styles.h13, style]} {...props} />
}

export function Tip({style, ...props}: Object): ReactElement {
    return <Text style={[styles.tip, style]} {...props} />
}

const styles = StyleSheet.create({
    h40: {
        fontSize: 40,
        color: '#06C1AE',
    },
    h16: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222222',
    },
    h14: {
        fontSize: 14,
        color: '#222222',
    },
    h12: {
        fontSize: 12,
        color: '#222222',
    },
    h13: {
        fontSize: 13,
        color: '#777777',
    },
    tip: {
        fontSize: 13,
        color: '#999999'
    }
});
