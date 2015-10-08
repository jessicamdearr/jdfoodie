require "jekyll"

desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site",
    "asset_url" => "http://jdfoodie.com"
  })).process
end


# TODO: Make this error out if the code has uncommited files in the workspace
# TODO: make this also tag the repo
desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  system "s3_website push --verbose"
end

desc "Dev Mode (Serve Locally)"
task :serve do
  options = {
    'serving' => true,
    'watch' => true,
    'force_polling' => true,
  }
  Jekyll::Commands::Build.process(options)
  Jekyll::Commands::Serve.process(options)
end

