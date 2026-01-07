import React, { useState } from 'react'
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native'

const ModalExample = () => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View>
			<Modal
				animationType="fade"
				transparent={false}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.modalView}>
					<Text style={styles.modalLabel}>This is modal...</Text>
					<Pressable onPress={() => setModalVisible(!modalVisible)}>
						<Text style={styles.textStyle}>Hide modal by pressing</Text>
					</Pressable>
				</View>
			</Modal>
			<Pressable
				onPress={() => setModalVisible(true)}>
				<Text style={styles.textStyle}>Show modal message</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	modalView: {
		marginTop: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5,
	},
	modalLabel: {
		fontSize: 24
	},
	textStyle: {
		fontSize: 18
	}
})

export default ModalExample;