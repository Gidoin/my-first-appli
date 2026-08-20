import { ResponsiveBar } from "@nivo/bar";

const data = [
  { country: "France", value: 42 },
  { country: "Germany", value: 35 },
  { country: "Spain", value: 28 },
  { country: "Italy", value: 31 },
  { country: "UK", value: 22 },
];

function App() {
  return (
    <div
      style={{
        height: 300,
        width: 400,
        backgroundColor: "#f0f0f0",
        display: "fixed",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="country"
        margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
        axisBottom={{
          legendPosition: "middle",
          legendOffset: 10,
        }}
        axisLeft={{
          legend: "Valeur",
          legendPosition: "middle",
          legendOffset: -50,
        }}
      />
    </div>
  );
}

export default App;
