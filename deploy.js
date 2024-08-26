const { exec } = require("child_process");
const path = require("path");

// Path to your Terraform configuration directory
const terraformDir = path.join(__dirname, "terraform");
const awsProfile = "kp-personal";

// Function to run a command and return a promise
function runCommand(command) {
  return new Promise((resolve, reject) => {
    console.log({ terraformDir });
    exec(
      command,
      { cwd: terraformDir, env: { ...process.env, AWS_PROFILE: awsProfile } },
      (error, stdout, stderr) => {
        if (error) {
          reject(`Error: ${stderr}`);
        } else {
          resolve(stdout);
        }
      }
    );
  });
}

(async () => {
  try {
    console.log("Initializing Terraform...");
    await runCommand("terraform init");
    console.log("Terraform initialized.");

    console.log("Planning Terraform deployment...");
    const planOutput = await runCommand("terraform plan");
    console.log(planOutput);

    console.log("Applying Terraform deployment...");
    const applyOutput = await runCommand("terraform apply -auto-approve");
    console.log(applyOutput);

    console.log("Terraform deployment completed.");
  } catch (error) {
    console.error("Error during Terraform deployment:", error);
  }
})();
