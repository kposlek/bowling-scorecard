# Bowling Scorecard

## Scenario:

We want to build the software for a bowling-arena. We need to have a simple UI
where players can track their game. For simplicity only consider single players.

## requirements

Task: Bowling Scoreboard according to the rules specified here
http://slocums.homestead.com/gamescore.html
Input: Next roll - number of the pins hit.
Checks: pin number check for every roll, end-of-the-game check.
Ouput: Scoreboard displaying frames, total score by frames, hits
within the frame, including Strikes, Spares and Misses (see the link
above for reference).
Displaying Splits and Fouls is NOT required.
Scorebord is to be refreshed after every roll.
Simplicity: single player only

## The Basics of Keeping Score

     Even with automatic scoring, it's a good idea to know the fundamentals of keeping score in the sport of bowling.  After all, you have to know how to keep score if you want to know what you need to bowl to beat your opponent for either competition or just for fun!!
     First, what is a game of bowling?  Some people get confused when they hear the phrases "per game" or "per game per person."  A game of bowling consists of 10 frames, in which a bowler has two chances per frame to knock down all ten pins.  If a bowler knocks down all ten pins in those two turns in the 10th frame, an extra bonus chance is awarded.
     So, when we say "per game" or "per game per person," that means each 10 full frames bowled by each person.  So if two people bowl one game each (10 frames each) they have bowled a total of two games.  Our Automatic Scorers can fit six people on each lane, so if each person bowls a game, six complete games have been bowled.  Even though each person has bowled only one game, 60 total frames have been bowled by the group, equaling 6 games.

This is an example of one complete game:

### Scoring

There are several symbols used when keeping score: an "X" signifies a "strike" in which all ten pins have been knocked down by the first roll of the ball in a frame; a "/" signifies a "spare" in which the remainder of the pins left standing after the first roll are knocked down on the second roll in a frame; a "-" indicates that no pins were knocked down on that roll, called a "miss"; an"F" indicates a "foul" where a part of the bowler's body went past the foul line, which marks the boundry of the approach (the part of the lane where we walk and release the ball) and the lane itself, where the oil is placed and the ball rolls towards the pins; and a "O" around a number indicates that the pins left standing after the first roll are in a formation known as a "split." Some scorers, such as ours, use an "S" in front of the number to indicate a split. Splits occur when the headpin (the foremost pin) is knocked down, and there is a gap of at least one pin between all the others left standing. The terms "wide" and "washout" are used to define this situation except that the headpin was left standing. Sometimes, a "W" is used to indicate this situation, but that has generally gone out of use.

For the most part, you keep score by adding the number of pins knocked down in each frame. Special bonuses are awarded for strikes and spares. When a strike is bowled, the bowler is awarded the score of 10 (for knocking down all ten pins), plus he gets to add the total of his next two rolls to that frame. For a spare, the bowler gets the 10, plus the total number of pins knocked down on the next roll only. In the examples above, you can see that the bowler rolled a strike in the 1st frame, so he gets 10 for that frame, plus gets to add whatever he knocks down on his next two rolls. In 2nd frame, he knocked down seven pins on his first roll, indicated by the number 7. On his second roll, he knocked down the remaining three pins standing, so he gets a spare in that frame, and adds 10 more pins to his score in the 1st frame, indicated by the number 20. He also gets the bonus for the spare, so must wait to roll another ball before adding the score for the 2nd frame. His first roll of the 3rd frame knocks down all but one pin, so he gets to add 19 pins to his total score in the 2nd frame, making the score for two frames 39. The bowler misses the pin on his second roll, so only gets a total of 9 for the 3rd frame, and that is immediately added to the total score, which becomes 48 for the first three frames.

In the 4th frame, the bowler gets another strike, so no total is added until he rolls the ball two more times. In the 5th frame, on the first roll, the ball goes into the gutter, so a miss is scored, but no total is added yet until he rolls the second ball in which he knocks down 8 of the pins. He gets a score of 18 for the 4th frame and 8 for the 5th frame, making his total score at the halfway point 74.

     In the 6th frame, the bowler converts a split, then his foot crosses the foul line on the first roll of the 7th frame.  Even though he knocked some pins down on that roll, an "F" is marked, and zero taken because of the violation, giving the bowler only the original total of 10 for the 6th frame, making his total score at that point 84.  He knocks down 6 pins in the second roll of the 7th frame, giving him a total score of 90 through seven complete frames.
     In the 8th and 9th frames, the bowler gets a strike each, also called a "double." Because the bowler has yet to roll two balls following the strike in the 8th frame, no total score is made yet.  In the first ball of the 10th frame, the bowler gets another strike, making three consecutive strikes which is also called a "turkey."  The bowler also gets the maximum score possible for a single frame of bowling in the 8th frame, which is 30 pins, and that is added to the 90 for a total score of 120 in eight frames.  Because the bowler knocked down all ten pins in one of his two available rolls for the 10th frame, he will get a bonus third roll for that frame.  He knocks down eight pins on the second roll, making his total for the 9th frame 28, which is added to his total score of 120, giving him 148 for nine frames.  On the bonus ball, he only gets one of the pins left standing, so he adds the 10 for the strike on his first roll to the 8 on his second roll with the 1 of his bonus third roll for a total of 19 pins in the 10th frame.  That 19 is then added to his current total score of 148, giving the bowler a final score of 167 for the game.

If the bowler didn't get a strike or spare in the 10th frame, as shown here, no bonus roll is awarded and the score would look like this (with seven pins knocked down on the first roll, and all but one knocked down on the second roll).

### The Perfect Game

Every serious bowler aspires to bowl what is called the perfect game, as one of his or her goals. As mentioned above, the maximum score for a single frame is 30 pins -- 10 for the pins actually knocked down in that frame when a strike is rolled, plus 10 pins for the first roll that follows (which would have to be a strike), and another 10 pins for the second roll (which would also have to be a strike). Times this by the 10 frames in a game of bowling and you get the perfect game -- a 300. As you can see above, it is achieved by rolling 12 consecutive strikes in a single game.
Website Designed
