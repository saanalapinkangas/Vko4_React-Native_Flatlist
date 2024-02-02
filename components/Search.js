import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Search({executeSearch}) {
    const [search, setSearch] = useState("");

    return (
        <View style={styles.bg}>
            <Text><FontAwesome name="search" size={28} color="purple" /></Text>
            <TextInput
                style={styles.searchBox}
                value={search}
                onChangeText={text => setSearch(text)}
                placeholder="Search..."
                returnKeyType="search"
                onSubmitEditing={() => executeSearch(search)}
                />

        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        marginLeft: 10,
        borderColor: 'purple',
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        width: 280,
    },
    bg: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
    }
});