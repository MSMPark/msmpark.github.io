function rstates = reduceStates(hist)
    for i = 1:length(hist)
        if hist(i)==2
            hist(i)=1;
        else
            if hist(i)==3
                hist(i)=2;
            else
                hist(i)=hist(i);
            end
        end
    end
    
    rstates = hist;
end

