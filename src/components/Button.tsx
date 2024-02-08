function ReloadButton() {
  return (
    <div>
      <button className="mt-4" type="button" onClick={() => window.location.reload()}>
        Refresh
      </button>
    </div>
  );
}

export default ReloadButton;
