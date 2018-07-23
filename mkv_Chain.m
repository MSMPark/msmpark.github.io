clear all; close all; clc;

%Create a markov chain transition matrix
P = [0.98 0.1 0.00;
     0.02 0.7 0.05;
     0.00 0.2 0.95];
[V, D] = eig(P);
V1 = V(:,3);
V1 = V1/sum(V1);
moves = 350;
sampleNum = 10000;

hist = zeros(moves, 1);
all = zeros(moves, sampleNum);

%Generic way to determine number of states and select initial state.
states = linspace(1,length(P(:,1)), length(P(:,1)));
state = randi(length(states));

%Generates a matrix of samples
for j=1:sampleNum
    for i = 1:moves
        hist(i) = state;
        state = moveState(state, P);
    end
    all(:,j) = hist;
end 

test = all(moves,:);

%Determine frequency of particular states
[freq, total] = freqCount(test, length(states));

%Display histogram of states
histDisp(freq, length(states));

%----Reduce the number of states----%
rstates = reduceStates(test);

%Determine frequency of reduced states, then display.
[freq1, total1] = freqCount(rstates, max(rstates));
histDisp(freq1, max(rstates));