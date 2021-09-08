export const lambdaLog = (name, event = undefined) => {
  const eventMessage = event
    ? `started with event: ${JSON.stringify(event)}`
    : "";
  console.log(`Lambda function ${name} ${eventMessage}`);
};
