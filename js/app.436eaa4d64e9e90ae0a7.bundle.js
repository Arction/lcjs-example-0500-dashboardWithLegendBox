(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,a,t)=>{const s=t(809),{lightningChart:r,AxisScrollStrategies:i,PointShape:l,AxisTickStrategies:o,Themes:n}=s,{createProgressiveRandomGenerator:u}=t(27),d=r().Dashboard({numberOfRows:2,numberOfColumns:2}),x=d.createLegendBoxPanel({columnIndex:0,rowIndex:1,columnSpan:1,rowSpan:1});{const e=new Date,a=1e3,t=d.createChartXY({columnIndex:0,rowIndex:0,columnSpan:1,rowSpan:1}).setTitle("Live sales").setPadding({right:30}).setMouseInteractionsWhileScrolling(!0),s=t.addSplineSeries({pointShape:l.Circle}).setName("Product").setStrokeStyle((e=>e.setThickness(2))).setPointSize(5).setCursorInterpolationEnabled(!1).setCursorResultTableFormatter(((e,a,t,s)=>e.addRow(a.getName()).addRow("Time : ",a.axisX.formatValue(t)).addRow("Sold : ",s.toFixed(0)+" pieces")));t.getDefaultAxisX().setInterval(-61e3,0).setScrollStrategy(i.progressive).setTickStrategy(o.DateTime,(a=>a.setDateOrigin(e))),t.getDefaultAxisY().setTitle("Units sold").setInterval(0,500).setScrollStrategy(i.expansion),u().setNumberOfPoints(1e4).generate().setStreamBatchSize(1).setStreamInterval(500).setStreamRepeat(!0).toStream().forEach((e=>{e.x=e.x*a,e.y=500*e.y,s.add(e)})),x.add(t)}{const e=d.createSpiderChart({columnIndex:1,rowIndex:0,columnSpan:1,rowSpan:2}).setTitle("Product development costs vs. sales profits").setScaleLabelFont((e=>e.setSize(12))).setAxisLabelFont((e=>e.setSize(14).setStyle("italic")));e.addSeries(l.Circle).setName("Sales Profits").addPoints({axis:"January",value:100},{axis:"February",value:200},{axis:"March",value:300},{axis:"April",value:400},{axis:"May",value:500},{axis:"June",value:650},{axis:"July",value:800},{axis:"August",value:990},{axis:"September",value:1200},{axis:"October",value:1100},{axis:"November",value:1400},{axis:"December",value:1500}).setCursorResultTableFormatter(((e,a,t,s,r)=>e.addRow(a.getName()).addRow(s).addRow("$"+t))),e.addSeries(l.Circle).setName("Development Costs").addPoints({axis:"January",value:0},{axis:"February",value:100},{axis:"March",value:300},{axis:"April",value:400},{axis:"May",value:500},{axis:"June",value:600},{axis:"July",value:700},{axis:"August",value:900},{axis:"September",value:1e3},{axis:"October",value:1100},{axis:"November",value:1300},{axis:"December",value:1400}).setCursorResultTableFormatter(((e,a,t,s,r)=>e.addRow(a.getName()).addRow(s).addRow("$"+t))),x.add(e),d.setRowHeight(0,3)}}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);