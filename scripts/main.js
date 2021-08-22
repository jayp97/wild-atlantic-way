
const container = d3.select('#scrolly-block'); 
const stepSel = container.selectAll('.step'); 

console.log(stepSel);

const updateShapeColor = function(index){
    const sel = container.select(`[data-index='${index}']`);
    const color = sel.attr("data-color");

    stepSel.classed("is-active", (d,i)=> i === index); 
    container.select(".sticky").style("background-color", color); 
}

const init = function(){
    enterView({
        selector: stepSel.nodes(), 
        offset: 0.5, 
        enter: (el) => {
            const index = +d3.select(el).attr("data-index"); 
            updateShapeColor(index); 
        },
        exit: (el) => {
            let index = +d3.select(el).attr("data-index");
            index = Math.max(0, index-1); 
            updateShapeColor(index); 
        },
    })
}

init(); 