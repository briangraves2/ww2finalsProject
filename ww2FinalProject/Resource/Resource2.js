
var initGraph4 = function(data) {
var screen = {width:500,height:400};
var margins ={top:15,bottom:50,left:50,right:30}
var graph = {width:screen.width - margins.left - margins.right, height: screen.height - margins.top - margins.bottom}; 
var w = 500;
var h = 300;
var padding =30;
var barPadding=0;
var myScale2 = d3.scaleLinear()
  .domain([0, d3.max(data.map(function(d){return parseInt(d.Iron)
  }))])
  .range([0, h-padding -20])
var xScale4 = d3.scaleBand()
          .domain(data.map(function(d) {
              return d.Country;
          }))
          .range([5, 500])
var xAxis= d3.axisBottom()
    .scale(xScale4)

var svg = d3.select("#Resource2")
.append("svg")
.attr("width", w)
.attr("height", h);
d3.select("#Resource2 svg")    
.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("fill","teal")
.attr("fill",function(d) {
    return "rgb(200, 100 , 0" + Math.round(parseInt(d.Iron) * 1) + ")";
})
.attr("x",function(d, i){
    return xScale4(d.Country)})
.attr("y", function(d){
    return h - padding - myScale2(parseInt(d.Iron));
})
.attr("width", 40)
.attr("height",function(d){
    return myScale2(parseInt(d.Iron));
})
    .attr("id", function(d){
    return d.Country
})
    
.on("mouseover", function(d) {
var xPosition3 = parseFloat(d3.select(this).attr("x")) +668;
var yPosition3 = parseFloat(d3.select(this).attr("y")) +430;

d3.select("#tooltip4")
    .style("left",xPosition3+"px")
    .style("top",yPosition3+"px")
    .classed("hidden", false)
    
d3.select("#tooltip4").select("#Country4")
    .text(d.Country);
    
d3.select("#tooltip4").select("#Iron")
    .text(d.Iron);

})
.on("mouseout", function() {
    d3.select("#tooltip4").classed("hidden", true)
})        
    
svg.append("g")
    .call(xAxis)
    .attr("transform", "translate(0," +(h - padding)+")")
    
var labels = d3.select("#Resource2 svg")
.append("g")
.classed("labels", true)

labels.append("text")
    .text("Iron Production")
    .classed("title", true)
    .attr("text-anchor", "middle")
    .attr("x", margins.left+(graph.width/2))
    .attr("y", margins.top/2 + 5);
}

var dataset = d3.csv("Resource/Resource2.csv");
var successFcn4=function(data){
console.log(data);
initGraph4(data); 
}
var errFcn4=function(errormessage){
    console.log(errormessage)
}
dataset.then(successFcn4,errFcn4)

