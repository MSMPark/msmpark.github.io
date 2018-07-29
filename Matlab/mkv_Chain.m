clear all; close all; clc;

%Create a markov chain transition matrix
P = [0.98 0.1 0.00;
     0.02 0.7 0.05;
     0.00 0.2 0.95];
 
%Find steady state of transition matrix
initPow = 1;
steady = ones(1,length(P));
while steady > 10^(-6)
    steady = sum(abs(P^initPow - P^(initPow+1)));
    initPow = initPow+1;
end
steadyState = P^initPow;

%Determine number of transitions and number of trials
moves = initPow;
sampleNum = 10000;

%Generic way to determine number of states and select initial state.
states = linspace(1,length(P), length(P));
state = randi(length(states));

%Generates a matrix of markov chain samples
for j=1:sampleNum
    for i = 1:moves
        chain(i) = state;
        state = moveState(state, P);
    end
    trials(:,j) = chain;
end 

%Determine the eigenvectors and eigenvalues
[V, D] = eig(P);
[dom, ind] = max(abs(diag(D)));
V1 = V(:,ind);
V1 = V1/sum(V1);

%Capture endstate of all the trials
test = trials(moves,:);

%Determine frequency of particular states
[freq, total] = freqCount(test, length(states));

%Display histogram of states
histDisp(freq, length(states));

%----Reduce the number of states----%
rstates = reduceStates(test);

%Determine frequency of reduced states, then display.
[freq1, total1] = freqCount(rstates, max(rstates));
histDisp(freq1, max(rstates));