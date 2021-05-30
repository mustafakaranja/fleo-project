import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Image, Progress, Label } from "semantic-ui-react";

const TataSteel = () => {
  const [tatasteel, setTatasteel] = useState(false);
  const [factoryA, setFactoryA] = useState(false);
  const [factoryB, setFactoryB] = useState(false);
  const [factoryC, setFactoryC] = useState(false);

  return (
    <Card.Group
      style={{
        margin: "0",
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Card onClick={() => setTatasteel(true)}>
        <Card.Content>
          <Card.Meta style={{ float: "right" }}>
            <strong> 50%</strong> complete
          </Card.Meta>
          <Card.Header>Tata Steel</Card.Header>
          <br /> <br />
          <Card.Description>
            <Label color="yellow" size="small" style={{ float: "right" }}>
              {" "}
              Off Track
            </Label>
            <strong>Total Sales - 200 crores</strong>
          </Card.Description>
          <Card.Description>
            <strong>Target Sales - 400 crores</strong>
          </Card.Description>
          <br />
          <Progress percent={50} size="small" warning />
        </Card.Content>
      </Card>
      <div style={{ display: "flex", padding: 10 }}>
        {tatasteel && (
          <Card
            onClick={() => {
              setFactoryA(true);
              setFactoryB(false);
              setFactoryC(false);
            }}
            style={{ margin: "auto", marginRight: 20 }}
          >
            <Card.Content>
              <Card.Meta style={{ float: "right" }}>
                <strong> 20%</strong> complete
              </Card.Meta>
              <Card.Header>Factory A</Card.Header>
              <br /> <br />
              <Card.Description>
                <Label color="red" size="small" style={{ float: "right" }}>
                  {" "}
                  At Risk
                </Label>
                <strong>Total Sales - 20 crores</strong>
              </Card.Description>
              <Card.Description>
                <strong>Target Sales - 40 crores</strong>
              </Card.Description>
              <br />
              <Progress percent={20} size="small" error />
            </Card.Content>
          </Card>
        )}
        {tatasteel && (
          <Card
            onClick={() => {
              setFactoryB(true);
              setFactoryC(false);
              setFactoryA(false);
            }}
            style={{ margin: "auto", marginRight: 20 }}
          >
            <Card.Content>
              <Card.Meta style={{ float: "right" }}>
                <strong> 75%</strong> complete
              </Card.Meta>
              <Card.Header>Factory B</Card.Header>
              <br /> <br />
              <Card.Description>
                <Label color="green" size="small" style={{ float: "right" }}>
                  {" "}
                  On Track
                </Label>
                <strong>Total Sales - 150 crores</strong>
              </Card.Description>
              <Card.Description>
                <strong>Target Sales - 200 crores</strong>
              </Card.Description>
              <br />
              <Progress percent={75} size="small" success />
            </Card.Content>
          </Card>
        )}

        {tatasteel && (
          <Card
            onClick={() => {
              setFactoryC(true);
              setFactoryB(false);
              setFactoryA(false);
            }}
            style={{ margin: "auto", marginRight: 20 }}
          >
            <Card.Content>
              <Card.Meta style={{ float: "right" }}>
                <strong> 50%</strong> complete
              </Card.Meta>
              <Card.Header>Factory C</Card.Header>
              <br /> <br />
              <Card.Description>
                <Label color="yellow" size="small" style={{ float: "right" }}>
                  {" "}
                  Off Track
                </Label>
                <strong>Total Sales - 30 crores</strong>
              </Card.Description>
              <Card.Description>
                <strong>Target Sales - 100 crores</strong>
              </Card.Description>
              <br />
              <Progress percent={30} size="small" warning />
            </Card.Content>
          </Card>
        )}
      </div>

      {/* factory A -gowdown A */}

      <div style={{ display: "flex", padding: 10 }}>
        <div style={{ display: "flex" }}>
          {tatasteel && factoryA && (
            <Card style={{ margin: "auto", marginRight: 20 }}>
              <Card.Content>
                <Card.Meta style={{ float: "right" }}>
                  <strong> 20%</strong> complete
                </Card.Meta>
                <Card.Header>GoDown A</Card.Header>
                <br /> <br />
                <Card.Description>
                  <Label color="red" size="small" style={{ float: "right" }}>
                    {" "}
                    At Risk
                  </Label>
                  <strong>Total Sales - 10 crores</strong>
                </Card.Description>
                <Card.Description>
                  <strong>Target Sales - 50 crores</strong>
                </Card.Description>
                <br />
                <Progress percent={20} size="small" error />
              </Card.Content>
            </Card>
          )}

          {tatasteel && factoryA && (
            <Card style={{ margin: "auto", marginRight: 20 }}>
              <Card.Content>
                <Card.Meta style={{ float: "right" }}>
                  <strong> 20%</strong> complete
                </Card.Meta>
                <Card.Header>GoDown B</Card.Header>
                <br /> <br />
                <Card.Description>
                  <Label color="red" size="small" style={{ float: "right" }}>
                    {" "}
                    At Risk
                  </Label>
                  <strong>Total Sales - 10 crores</strong>
                </Card.Description>
                <Card.Description>
                  <strong>Target Sales - 50 crores</strong>
                </Card.Description>
                <br />
                <Progress percent={20} size="small" error />
              </Card.Content>
            </Card>
          )}
        </div>

        {tatasteel && factoryB && (
          <Card style={{ margin: "auto", marginRight: 20 }}>
            <Card.Content>
              <Card.Meta style={{ float: "right" }}>
                <strong> 80%</strong> complete
              </Card.Meta>
              <Card.Header>GoDown A</Card.Header>
              <br /> <br />
              <Card.Description>
                <Label color="green" size="small" style={{ float: "right" }}>
                  {" "}
                  On Track
                </Label>
                <strong>Total Sales - 150 crores</strong>
              </Card.Description>
              <Card.Description>
                <strong>Target Sales - 120 crores</strong>
              </Card.Description>
              <br />
              <Progress percent={80} size="small" success />
            </Card.Content>
          </Card>
        )}
        {tatasteel && factoryB && (
          <Card style={{ margin: "auto", marginRight: 20 }}>
            <Card.Content>
              <Card.Meta style={{ float: "right" }}>
                <strong> 80%</strong> complete
              </Card.Meta>
              <Card.Header>GoDown B</Card.Header>
              <br /> <br />
              <Card.Description>
                <Label color="green" size="small" style={{ float: "right" }}>
                  {" "}
                  On Track
                </Label>
                <strong>Total Sales - 150 crores</strong>
              </Card.Description>
              <Card.Description>
                <strong>Target Sales - 120 crores</strong>
              </Card.Description>
              <br />
              <Progress percent={80} size="small" success />
            </Card.Content>
          </Card>
        )}

        {tatasteel && factoryC && (
          <Card style={{ margin: "auto", marginRight: 20 }}>
            <Card.Content>
              <Card.Meta style={{ float: "right" }}>
                <strong> 40%</strong> complete
              </Card.Meta>
              <Card.Header>GoDown A</Card.Header>
              <br /> <br />
              <Card.Description>
                <Label color="yellow" size="small" style={{ float: "right" }}>
                  {" "}
                  Off Track
                </Label>
                <strong>Total Sales - 40 crores</strong>
              </Card.Description>
              <Card.Description>
                <strong>Target Sales - 100 crores</strong>
              </Card.Description>
              <br />
              <Progress percent={40} size="small" warning />
            </Card.Content>
          </Card>
        )}

        {tatasteel && factoryC && (
          <Card style={{ margin: "auto", marginRight: 20 }}>
            <Card.Content>
              <Card.Meta style={{ float: "right" }}>
                <strong> 40%</strong> complete
              </Card.Meta>
              <Card.Header>GoDown B</Card.Header>
              <br /> <br />
              <Card.Description>
                <Label color="yellow" size="small" style={{ float: "right" }}>
                  {" "}
                  Off Track
                </Label>
                <strong>Total Sales - 40 crores</strong>
              </Card.Description>
              <Card.Description>
                <strong>Target Sales - 100 crores</strong>
              </Card.Description>
              <br />
              <Progress percent={40} size="small" warning />
            </Card.Content>
          </Card>
        )}
      </div>
    </Card.Group>
  );
};

export default TataSteel;
