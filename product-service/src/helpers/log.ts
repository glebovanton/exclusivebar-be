export const lambdaLog = (name, event = "") => {
  const eventMessage = event ? `started with event: ${event}` : "";
  console.log(`Lambda function ${name} ${eventMessage}`);
};
