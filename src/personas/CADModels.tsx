const CADModelsDisplay = () => {
  return (
    <>
      <div>
        <img src="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/files%2FWhatsApp%20Image%202024-04-24%20at%2018.23.39.jpeg?alt=media&token=93fe95f6-d2be-420c-9a5d-6a9c30e47cce" />
      </div>
      <br />
      <div>
        <img src="https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/files%2FWhatsApp%20Image%202024-04-24%20at%2018.24.46.jpeg?alt=media&token=77c8afab-7b0f-4001-b5cc-5c604eb71a97" />
      </div>
      <br />

      <a
        href={
          "https://firebasestorage.googleapis.com/v0/b/tesst-dc862.appspot.com/o/files%2FCell%20Packaging%20final.stl?alt=media&token=090ac914-9fe2-44a3-a4b4-ac5bed2bb681"
        }
        download={"name"}
      >
        Download
      </a>
    </>
  );
};

export default CADModelsDisplay;
