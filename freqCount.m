function [freqList, totalCount] = freqCount(hist, states)
    %Determines the amount of time the system spends in one state
    count = 1;
    slot = 1;
    freqList = zeros(states, slot);
    for i=2:length(hist)
        if hist(i-1) == hist(i)
            count = count+1;
        else
            freqList(hist(i-1), slot) = count;
            count = 1;
            slot = slot+1;
        end
    end
    freqList(hist(i), slot) = count;
    for j=1:states
        totalCount(j) = sum(freqList(j,:));
    end
end

