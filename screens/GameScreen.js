import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;

	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return randomNumber;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber }) {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	function nextGuessHandler(direction) {
		if (direction === "lower") {
			maxBoundary = currentGuess - 1;
			generateRandomBetween();
		}
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or Lower?</Text>
				<View>
					<PrimaryButton>+</PrimaryButton>
					<PrimaryButton>-</PrimaryButton>
				</View>
			</View>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
});

export default GameScreen;
