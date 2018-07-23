function histDisp(freq, states)
    %Displays histograms of the time spent in a state
    for j = 1:states
        figure(j)
        h = freq(j,:);
        h(h==0)=[];
        histogram(h)
        xlabel('Residence Times')
        ylabel('Frequency of Residence Times')
    end
end

