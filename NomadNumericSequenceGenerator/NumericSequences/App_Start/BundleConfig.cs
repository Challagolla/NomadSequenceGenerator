using System.Web;
using System.Web.Optimization;

namespace NumericSequences
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/bootstrap").Include("~/Content/bootstrap.css"));

            // Load jQuery and Angular in separate files in production, so they can load in parallel

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/angular.js"));

            // Order of inclusion of these scripts is critical
			bundles.Add(new ScriptBundle("~/bundles/numericSequences").Include(
                        "~/Scripts/app/NumericSequnce.js",
                        "~/Scripts/app/SequnceGeneratorControl.js",
                        "~/Scripts/app/NumericeSequenceFactory.js",
                        "~/Scripts/app/NumericSequenceDirective.js"));
        }
    }
}