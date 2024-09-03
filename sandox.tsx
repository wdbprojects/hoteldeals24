{
  /* GUESTS */
}
<div className="grid grid-cols-5 items-center gap-0 max-h-10">
  <span className="text-sm col-span-3 font-medium">Number of guests:</span>
  <div className="col-span-2 border rounded-sm flex items-center justify-center gap-1 p-1">
    <Button size="icon" variant="ghost">
      <Minus size={18} className="text-muted-foreground" />
    </Button>
    <Input
      value={1}
      className="text-center border-none p-0 w-[2.6rem] shadow-none text-base !text-foreground font-normal"
    />
    <Button size="icon" variant="ghost">
      <Plus size={16} className="text-muted-foreground" />
    </Button>
  </div>
</div>;
