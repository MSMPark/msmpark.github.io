function endState = moveState(startState, P)
    %Records Markov states

    %Determines which state to move to based on starting state.
    chng = rand(1);
    A = P(:,startState);
    diff = A(1);
    for i=1:length(A)
        if chng < diff
            thresh = i;
            break
        end
        diff = diff+A(i+1);
    end
    %Returns the ending state.
    endState = thresh;
end