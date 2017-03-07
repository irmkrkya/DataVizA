/**
 * @author Irem Karakaya
 */
google.charts.load('current', {
				'packages' : ['corechart']
			});

			/* I am telling my code that when Google's code will be loaded, call back the corechart package*/

			google.charts.setOnLoadCallback(createBothCharts);

			function createBothCharts() {

				createChart1();
				makeChart2();
			}

			/* I changed the name of the function which was "drawChart" to "createChart" to have a chart.*/

			function createChart1() {

				/* I called on the DataTable function to make a new DataTable based on
				 * Unaccompanied Allien Children (UAC) data from:https://www.acf.hhs.gov/orr/about/ucs/facts-and-data.*/
				var UAC_data = new google.visualization.DataTable();
				/* I made a column which is a string , it's name is "Country of Origin"*/
				UAC_data.addColumn('string', 'Country of Origin');
				/* I added a column type of which is number , labelled "Countries"*/
				UAC_data.addColumn('number', 'Countries');
				/*I added rows which is a list. It consists of name of the countries and percentage of children
				 coming from these countries. So each item in my initial list are also lists on their own.*/

				/* Add a column for the bar label */
				UAC_data.addColumn({type: 'string', role: 'annotation'});
				
				UAC_data.addRows(chart1Data);

				/*I will decide on the outline of my chart with a var.
				 *Although my headline fails to be charming, it has a verb.
				 *I also attempted to change the tags of title, width and height but then
				 *my chart appared at the middle of the page. I didn't like it to be above my page like a sun
				 *So I will the labels as they are
				 *I changed the width to have "all other countries" in a single line. */
				var main_features = {
					'title' : 'Number of unaccompanied minors arriving US border increased in 2016',
					'width' : 600,
					'height' : 600,
					'backgroundColor' : '#eeeeee',
					'bar' : {'groupWidth':10}
				};

				/* I will add another var to create my "pieChart".
				 * My pie chart needs to have a function called "getElementById "
				 * so that I can place the chart in the page with a div that.
				 * Obvisouly my chart will take the information from
				 * my UAC_data and main_features that I have just decided on.
				 * I will place my div to wherever I want this chart to appear.
				 * I chose somewhere in the middle of my first article.
				 * I may have little problem as my research was on Bosnian refugees and
				 * my chart will be Central American minors.*/

				var visualization = new google.visualization.BarChart(document.getElementById('chart_place1'));
				visualization.draw(UAC_data, main_features);

				/*End of my draw function*/
			}

			function makeChart2() {

				/* I am making my second chart with makeChart2 function. I am taking the historical data of
				 * unaccompanied children arrivinf the US border
				 * from https://www.cbp.gov/newsroom/stats/southwest-border-unaccompanied-children/fy-2016.
				 * That's why I called it year_data.
				 * I am going to use visualization recipebook in the google library and create a datatable
				 * Datatable like an excel sheet will allow me to add columns and rows.*/
				var year_data = new google.visualization.DataTable();
				/* I am creating a column which is a string. The column's name is "Years"*/
				year_data.addColumn('string', 'Years');
				/* I am making another column type of which is number. It is labelled as "Total Number of Central American children"*/
				year_data.addColumn('number', 'Total Number of Central American Children');
				/*I am adding rows which is a list.
				 *It has the Fiscal Years and total number of children coming from El Salvador, Guatemala and Honduras
				 * and arriving to the US border.*/
				
				year_data.addRows(chart2Data);

				/*I decided to call my variable as main_frame because it has main features of the chart.
				 * The title of the chart will mention about the increasing numbers of children.
				 * I assigned width and length as "600" and "300"respectively.
				 * I will keep the background color as gray to be consistent. */
				var main_frame = {
					'title' : 'Number of unaccompanied minors arriving to the US border increased in last six years',
					'width' : 600,
					'height' : 300,
					'backgroundColor' : '#eeeeee'
				};

				/* I called the ID of chart as "chart_location". This one will be a column chart. */

				var visualization = new google.visualization.ColumnChart(document.getElementById('chart_location'));
				visualization.draw(year_data, main_frame);

				/*End of my makeChart2 function*/
			}
