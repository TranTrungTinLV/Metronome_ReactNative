import React from "react"
import { StyleSheet, View, Text } from "react-native"

export const Header = (): JSX.Element => {
    return <View style={styles.header}>
        <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                fontSize: 23,
                fontStyle: 'normal',
                fontWeight: '400',
                color: '#ffffff',
            }}>
            METRONOME
        </Text>
    </View>
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Header;