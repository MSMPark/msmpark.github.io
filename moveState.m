function endState = moveState(startState, P)
    %Records Markov states

    %Determines which state to move to based on starting state.
    chng = rand(1);
    A = P(:,startState);
    B = sort(A);
    diff = B(1);
    for i=1:length(B)
        if chng < diff
            thresh = i;
            break
        end
        diff = diff+B(i+1);
    end
    %Returns the ending state.
    endState = find(A == B(thresh));
end