# guessing-game
Guessing game

## Technical plan
1. Server should create a user by using `POST/users` API request.
2. Client should provide the UI interface based in MU components: 
	- guessed multiplier input; 
	- bet points input; 
	- round start button; 
	- multiplier speed slider; 
	- multiplier dynamics chart; 
	- players scores ranking table;
	- players current round table; 
	- player chat window.

## Questions:
1. Do you want to connect to the game other live players? How do you expect to work the chat window if there are only generated computer players? 
2. Does the player leaves the game when all his start points are lost?
3. Should each player decide himself on the bet points amount per each round?
4. Should the multiplier MAXIMUM logic be random per each round? How players can predict the multiplier value if there is no any logic behind this and they always will loose the round. Does it make sense to predict the multiplier that it will be above some threshold?
5. Is it correct that the speed slider is just a visual effect for the multiplier chart?
6. It is written in the task that computer players can be generated on the server side. Why we need this if we don't save any data to database? Do you want it just for demonstration purpose because there is no other functionality for the backend side? Did you plan to use backend as a socket provider for LIVE (not computer) players?

## Notes:
1. Only layout was created. There is no design implmemented yet. 
2. There is no functionality implemented yet.